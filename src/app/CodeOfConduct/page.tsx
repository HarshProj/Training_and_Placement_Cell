import React from 'react';
import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Code of Conduct</h1>
      
      <div className="space-y-8">
        {/* Registration Process Section */}
        <div className="p-6 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-blue-600 bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Registration Process</h2>
          <div className="space-y-4">
            <p className="text-gray-800">
              All students eligible for On-campus/Pool campus/ Off campus (managed by Institute/CDC) 
              jobs must register themselves for the placement of the current session with the Career Development Cell.
            </p>
            
            <p className="text-gray-800">The registration can be made through either of the two modes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-800">
              <li>By visiting the website <a href="http://www.knit.ac.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">www.knit.ac.in</a></li>
              <li>By submitting Google form.</li>
            </ul>
            
            <p className="text-gray-800">
              It is mandatory to submit a signed hardcopy of registration form to Placement Cell.
            </p>
            
            <p className="text-gray-800">
              A separate registration form available with the Placement Cell is to be submitted (to Placement Cell) 
              for each company by those students who wish to appear for placement of that company.
            </p>
          </div>
        </div>
        
        {/* Student Conduct & Disciplinary Policy Section */}
        <div className="p-6 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-green-600 bg-white">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Student Conduct & Disciplinary Policy</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-3 text-gray-800">
              <li>
                Students are expected to behave with the companies, Placement Cell and the TPRs in a courteous manner 
                and should not argue with the recruiters and placement coordinators and maintain decorum even under provocation.
              </li>
              
              <li>
                No discussion with the recruiters regarding selections/selection process should be done.
              </li>
              
              <li>
                If there is any problem from the recruiter's side, student should inform the Placement Cell Office. 
                The student should not try to solve the problem on his/her own.
              </li>
              
              <li>
                Appropriate disciplinary actions shall be initiated against undisciplined students.
              </li>
              
              <li>
                Students must bring all required documents (including Institute ID card) along with them during placement.
              </li>
              
              <li>
                Students shall not leave the placement premises until and unless the placement process is either over 
                or the student is asked to leave the premises.
              </li>
              
              <li>
                No cell phones are allowed during a test. The process holds the same sanctity as any other competitive exam. 
                Any candidate will be debarred if not following the above.
              </li>
              
              <li>
                The date/time/venue of the interviews will be subject to changes which, at times, may be at a very short notice. 
                Students must keep themselves well informed by visiting the CDC website or by contacting TPRs.
              </li>
              
              <li>
                Students must complete all the pre-requisites (such as getting registered or filling a company's application form with the help of TPRs) 
                for any placement activity within the given time, failing which the student is required to get written permission signed by their branch 
                Placement Faculty Coordinator as well as by their HOD and shall submit original copy to CDC and a Xeroxed copy to their branch TPR, 
                then only he/she will be allowed to register or do the required activity.
              </li>
            </ul>
          </div>
        </div>
        
        {/* Additional Information Section */}
        <div className="p-6 rounded-lg shadow-lg border border-gray-200 border-l-4 border-l-purple-600 bg-purple-50">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Additional Information</h2>
          <p className="text-gray-800">
            For more details, please refer to the placement Policy:
            <a 
              href="https://shorturl.at/otLOR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 inline-block mt-2"
            >
              View Full Placement Policy
            </a>
          </p>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 border-t-4 border-t-blue-500 bg-white">
            <h3 className="text-xl font-medium mb-2 text-blue-800">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">If you have any questions about the registration process or placement activities, contact the Career Development Cell.</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Contact CDC</button>
          </div>
          
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 border-t-4 border-t-green-500 bg-white">
            <h3 className="text-xl font-medium mb-2 text-green-800">Latest Updates</h3>
            <p className="text-gray-700 mb-4">Stay updated with the latest placement news, upcoming companies, and important deadlines.</p>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">View Updates</button>
          </div>
        </div>
      </div>
    </div>
  );
}