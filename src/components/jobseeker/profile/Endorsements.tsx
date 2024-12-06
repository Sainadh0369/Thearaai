import React from 'react';
import { Award, Star, ThumbsUp, MessageCircle } from 'lucide-react';

const Endorsements = () => {
  const endorsements = [
    {
      id: 1,
      author: {
        name: 'Sarah Chen',
        role: 'Engineering Manager at TechCorp',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      },
      content: 'One of the most talented frontend developers I\'ve worked with. Exceptional problem-solving skills and a great team player.',
      skills: ['React', 'System Design', 'Team Leadership'],
      date: '2 months ago',
      likes: 34,
      replies: 8,
    },
    {
      id: 2,
      author: {
        name: 'Michael Rodriguez',
        role: 'Senior Tech Lead at InnovateTech',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      },
      content: 'Outstanding technical skills and great communication abilities. Always delivers high-quality work.',
      skills: ['Frontend Architecture', 'Mentoring', 'Technical Leadership'],
      date: '3 months ago',
      likes: 28,
      replies: 5,
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Endorsements</h2>
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center space-x-2">
          <Award className="w-5 h-5" />
          <span>Request Endorsement</span>
        </button>
      </div>

      <div className="space-y-6">
        {endorsements.map((endorsement) => (
          <div key={endorsement.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex space-x-4">
              <img
                src={endorsement.author.image}
                alt={endorsement.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{endorsement.author.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {endorsement.author.role}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {endorsement.content}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {endorsement.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-indigo-600">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{endorsement.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-indigo-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>{endorsement.replies} replies</span>
                    </button>
                  </div>
                  <span>{endorsement.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Endorsements;