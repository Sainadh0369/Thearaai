import * as tf from '@tensorflow/tfjs';
import { delay } from '../utils';

class NeuralNetwork {
  private model: tf.LayersModel | null = null;
  private readonly inputSize: number;
  private readonly hiddenSize: number;
  private readonly outputSize: number;

  constructor(inputSize: number, hiddenSize: number, outputSize: number) {
    this.inputSize = inputSize;
    this.hiddenSize = hiddenSize;
    this.outputSize = outputSize;
    this.initializeModel();
  }

  private initializeModel() {
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

  public async train(
    inputs: number[][],
    outputs: number[][],
    epochs: number = 50
  ): Promise<void> {
    if (!this.model) return;

    const xs = tf.tensor2d(inputs);
    const ys = tf.tensor2d(outputs);

    await this.model.fit(xs, ys, {
      epochs,
      batchSize: 32,
      validationSplit: 0.2,
      callbacks: {
        onEpochEnd: async (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs?.loss}`);
          await delay(10); // Prevent UI blocking
        }
      }
    });

    xs.dispose();
    ys.dispose();
  }

  public async predict(input: number[]): Promise<number[]> {
    if (!this.model) return [];

    const inputTensor = tf.tensor2d([input]);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const result = await prediction.array();
    
    inputTensor.dispose();
    prediction.dispose();

    return result[0];
  }

  public async save(path: string): Promise<void> {
    if (!this.model) return;
    await this.model.save(`localstorage://${path}`);
  }

  public async load(path: string): Promise<void> {
    this.model = await tf.loadLayersModel(`localstorage://${path}`);
  }
}

// Create instances for different tasks
export const jobMatchNetwork = new NeuralNetwork(50, 100, 1);
export const skillAnalysisNetwork = new NeuralNetwork(30, 60, 5);
export const resumeOptimizationNetwork = new NeuralNetwork(40, 80, 3);