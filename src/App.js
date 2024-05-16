import React from "react";

function App() {
  return (
    <div className="py-2 my-4 px-6 mx-5 font-Karla rounded-md  bg-white md:mx-auto max-w-screen-sm  md:px-10">
      <h2
        className="mt-10 mb-4 text-3xl font-Karla   
                           text-left text-green-900"
      >
        Contact Us
      </h2>

      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              for="firstName"
              className="block my-2 text-left  text-sm font-medium text-mediumgrey "
            >
              First Name<span class="text-green-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              className="shadow-sm bg-gray-50 border hover:border-green-500
                       border-gray-300 text-gray-900  cursor-pointer text-sm rounded-lg block w-full p-2.5"
              placeholder="Samar"
              required
            />
          </div>
          <div>
            <label
              for="firstName"
              className="block my-2 text-left text-sm  
                         font-medium text-text-mediumgrey"
            >
              Last Name<span class="text-green-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              className="shadow-sm bg-gray-50 border  
                  border-gray-300 hover:border-green-500 text-gray-900  
                   cursor-pointer   text-sm rounded-lg block w-full p-2.5"
              placeholder="Osman"
            />
          </div>
        </div>
        {/* Email Address */}
        <div className="my-4">
          <label
            for="email"
            className="block my-2 text-left text-sm  
                       font-medium text-text-mediumgrey"
          >
            Email Address<span class="text-green-500 ml-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="shadow-sm bg-gray-50 border  
                       border-gray-300 hover:border-green-500 text-gray-900  
                       cursor-pointer text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        {/* Query Type */}
        <div
          className="grid grid-cols-1 sm
         gap-4 md:grid-cols-2"
        >
          <div className="relative">
            <label
              for="Query Type"
              className="block my-2 text-left  
                       text-sm font-medium text-mediumgrey"
            >
              Query Type<span class="text-green-500 ml-1">*</span>
            </label>

            <div className="relative">
              <input
                type="text"
                id="generalEnquiry"
                name="queryType"
                className=" pl-10 shadow-sm bg-gray-50 border hover:border-green-500 focus:bg-green-100
                       border-gray-300 text-gray-900  cursor-pointer text-sm rounded-lg block w-full p-2.5"
                placeholder="General Enquiry"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <input
                  type="radio"
                  name="queryType"
                  id="generalEnquiryRadio"
                  className="form-radio h-4 w-4 text-green-500"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              id="supportRequest"
              name="queryType"
              className=" my-1 pl-10  shadow-sm bg-gray-50 border hover:border-green-500 focus:bg-green-100 focus:border-green-500
                       border-gray-300 text-gray-900  cursor-pointer text-sm rounded-lg block w-full p-2.5 md:my-9 "
              placeholder="Support Request"
              required
            />

            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <input
                type="radio"
                name="queryType"
                id="generalEnquiryRadio"
                className="form-radio h-4 w-4 text-green-500"
              />
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="my-4">
          <label
            for="message"
            className="block my-2 text-left  
                     text-sm font-medium text-mediumgrey  "
          >
            Message<span class="text-green-500 ml-1">*</span>
          </label>
          <textarea
            rows="6"
            name="message"
            className="block p-2.5 w-full text-sm  
                       text-gray-900 bg-gray-50 rounded-lg  
                        cursor-pointer shadow-sm border border-gray-300 hover:border-green-500 "
            placeholder="Query/Suggestion..."
          />
        </div>
        <div className="flex  justify-between mt-5 py-3 items-center text-sm text-mediumgrey ">
          <label className="flex items-center ">
            <input className="mr-2" type="checkbox" />

            <span>
              I consent to being contacted by the team
              <span className="text-green-500 ml-1 ">*</span>
            </span>
          </label>
        </div>
        {/* Submit */}
        <button
          type="submit"
          value="Send"
          className="my-6 p-3  w-full  text-white   
                   rounded-lg border-green-600  
                    bg-green-800 hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
