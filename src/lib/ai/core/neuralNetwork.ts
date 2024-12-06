import * as tf from '@tensorflow/tfjs';

export class NeuralNetwork {
  private model: tf.LayersModel | null = null;
  private readonly inputSize: number;
  private readonly hiddenSize: number;
  private readonly outputSize: number;

  constructor(inputSize: number, hiddenSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.hiddenSize = hiddenSize;
    this.outputSize = outputSize;
  }

  public async initialize(): Promise<void> {
    this.model = tf.sequential({
      layers: [
        tf.layers.dense({
          inputShape: [this.inputSize],
          units: this.hiddenSize,
          activation: 'relu'
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: this.hiddenSize,
          activation: 'relu'
        }),
        tf.layers.dropout({ rate: 0.2 }),
        tf.layers.dense({
          units: this.outputSize,
          activation: 'sigmoid'
        })
      ]
    });

    this.model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
    });
  }

  public async predict(input: number[]): Promise<number[]> {
    if (!this.model) {
      throw new Error('Neural network not initialized');
    }

    const inputTensor = tf.tensor2d([input]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const result = await prediction.array();
    
    inputTensor.dispose();
    prediction.dispose();

    return result[0];
  }

  public async train(inputs: number[][], outputs: number[][], epochs: number = 50): Promise<void> {
    if (!this.model) {
      throw new Error('Neural network not initialized');
    }

    const xs = tf.tensor2d(inputs);
    const ys = tf.tensor2d(outputs);

    await this.model.fit(xs, ys, {
      epochs,
      batchSize: 32,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs?.loss}`);
        }
      }
    });

    xs.dispose();
    ys.dispose();
  }

  public async loadWeights(weights: tf.Tensor[]): Promise<void> {
    if (!this.model) {
      throw new Error('Neural network not initialized');
    }
    await this.model.setWeights(weights);
  }

  public async getWeights(): Promise<tf.Tensor[]> {
    if (!this.model) {
      throw new Error('Neural network not initialized');
    }
    return this.model.getWeights();
  }
}