import React, { useState } from "react";
import { emailValidation } from "./Validation";
import { FaCheckCircle } from "react-icons/fa";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [qtype, setQtype] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    fname: "",
    lname: " ",
    email: " ",
    qtype: "",
    message: " ",
    check: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleError = (err, field) => {
    setErrorMessage((prev) => ({ ...prev, [field]: err }));
  };

  const handleInputChange = (e, field) => {
    const value = e.target.type === "check" ? e.target.checked : e.target.value;

    switch (field) {
      case "fname":
        setFname(value);
        if (value !== "") {
          handleError("", "fname");
        }
        break;

      case "lname":
        setLname(value);
        if (value !== "") {
          handleError("", "lname");
        }
        break;

      case "email":
        setEmail(value);
        if (emailValidation(value).isValid) {
          handleError("", "email");
        }
        break;

      case "qtype":
        setQtype(value);
        if (value !== "") {
          handleError("", "qtype");
        }
        break;

      case "message":
        setMessage(value);
        if (value !== "") {
          handleError("", "message");
        }
        break;

      case "check":
        setCheck(value);
        if (value !== "") {
          handleError("", "check");
        }
        break;
      default:
        break;
    }
    setFormSubmitted(false); // Reset form submission state when typing
  };

  const validate = async (e) => {
    // Prevent form submission
    e.preventDefault();

    setFormSubmitted(true);

    let isValid = true;

    // Existing validation logic
    if (!fname) {
      handleError("This field is required", "fname");
      isValid = false;
    } else {
      handleError("", "fname");
    }

    if (!lname) {
      handleError("This field is required", "lname");
      isValid = false;
    } else {
      handleError("", "lname");
    }

    if (!email) {
      handleError("Please enter email address", "email");
      isValid = false;
    } else if (!emailValidation(email).isValid) {
      handleError("Please enter a vaild email address", "email");
      isValid = false;
    } else {
      handleError("", "email");
    }

    if (!qtype) {
      handleError("Please select a query type", "qtype");
      isValid = false;
    } else {
      handleError("", "qtype");
    }

    if (!message) {
      handleError("This field is required", "message");
      isValid = false;
    } else {
      handleError("", "message");
    }

    if (!check) {
      handleError(
        "To submit this form, please consent to being contacted ",
        "check"
      );
      isValid = false;
    } else {
      handleError("", "check");
    }
    if (isValid) {
      // alert("Message Sent! ");
      setSuccessMessage("Message Sent!");
      // Clear the form and reset form submission state
      setFname("");
      setLname("");
      setEmail("");
      setQtype("");
      setMessage("");
      setCheck("");
      setFormSubmitted(false);
    }
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessage("");
  };

  return (
    <div className="py-2 my-4 px-6 mx-5 font-Karla rounded-md  bg-white  md:mx-auto max-w-screen-sm md:my-32 md:px-10">
      <h2 className="mt-6 mb-4 text-3xl font-Karla text-left text-green-900">
        Contact Us
      </h2>

      <form onSubmit={validate}>
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
              name="fname"
              placeholder="Samar"
              value={fname}
              // onChange={(e) => setFname(e.target.value)}
              onChange={(e) => handleInputChange(e, "fname")}
              className={`bg-gray-50 text-gray-900 text-md cursor-pointer block w-full p-2.5 px-4 py-2 border rounded-lg
               focus:ring-1 focus:ring-green-200 focus:border-green-500 hover:border-green-500 outline-none ${
                 formSubmitted && errorMessage.fname
                   ? "border-red-500"
                   : "border-gray-300"
               }`}
            />
            {errorMessage.fname && (
              <p className="text-red-500">{errorMessage.fname}</p>
            )}
          </div>
          <div>
            <label
              for="lastName"
              className="block my-2 text-left text-sm  
                         font-medium text-text-mediumgrey"
            >
              Last Name<span class="text-green-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="lname"
              placeholder="Osman"
              value={lname}
              // onChange={(e) => setLname(e.target.value)}
              onChange={(e) => handleInputChange(e, "lname")}
              className={`bg-gray-50 text-gray-900 text-md cursor-pointer block w-full p-2.5 px-4 py-2 border rounded-lg
               focus:ring-1 focus:ring-green-200 focus:border-green-500 hover:border-green-500 outline-none 
               ${
                 formSubmitted && errorMessage.lname
                   ? "border-red-500"
                   : "border-gray-300"
               }`}
            />
            {errorMessage.lname && (
              <p className="text-red-500">{errorMessage.lname}</p>
            )}
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
            placeholder="abc@gmail.com"
            value={email}
            required
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => handleInputChange(e, "email")}
            className={`bg-gray-50 text-gray-900 text-md cursor-pointer block w-full p-2.5
             px-4 py-2 border rounded-lg focus:ring-1 focus:ring-green-200 focus:border-green-500 hover:border-green-500 outline-none
              ${
                formSubmitted && errorMessage.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          />
          {errorMessage.email && (
            <p className="text-red-500">{errorMessage.email}</p>
          )}
        </div>
        {/* Query Type generalEnquiry */}
        <div
          className="grid grid-cols-1 sm
         gap-4 md:grid-cols-2"
        >
          <div className="relative">
            <label
              for="Query Type"
              className="block my-2 text-left text-sm font-medium text-mediumgrey"
            >
              Query Type<span class="text-green-500 ml-1">*</span>
            </label>

            <div className="relative">
              <input
                type="text"
                id="generalEnquiry"
                name="queryType"
                className=" bg-gray-50  text-gray-900 text-md   cursor-pointer 
              block w-full p-2.5 px-10 py-2 border rounded-lg focus:ring-1
               focus:ring-green-200 focus:border-green-500  hover:border-green-500 outline-none"
                placeholder="General Enquiry"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <input
                  type="radio"
                  name="qtype"
                  value="General Enquiry"
                  checked={qtype === "General Enquiry"}
                  // onChange={(e) => setQtype(e.target.value)}
                  onChange={(e) => handleInputChange(e, "qtype")}
                  className="form-radio h-4 w-4 text-green-500 accent-green-600 "
                />
              </div>
            </div>
          </div>
          {/* Query Type supportRequest */}
          <div className="relative">
            <input
              type="text"
              id="supportRequest"
              name="queryType"
              className="   bg-gray-50  text-gray-900 text-md   cursor-pointer 
              block w-full p-2.5 px-10 py-2 border rounded-lg focus:ring-1
               focus:ring-green-200 focus:border-green-500 hover:border-green-500 outline-none  md:my-9"
              placeholder="Support Request"
            />

            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <input
                type="radio"
                name="qtype"
                value="Support Request"
                checked={qtype === "Support Request"}
                // onChange={(e) => setQtype(e.target.value)}
                onChange={(e) => handleInputChange(e, "qtype")}
                className="form-radio h-4 w-4 text-green-500 accent-green-600"
              />
            </div>
          </div>

          {errorMessage.qtype && (
            <p className="text-red-500">{errorMessage.qtype}</p>
          )}
        </div>
        {/* End of Query Type */}
        {/* Message */}
        <div className="my-4">
          <label
            for="message"
            className="block my-2 text-left text-sm font-medium text-mediumgrey  "
          >
            Message<span class="text-green-500 ml-1">*</span>
          </label>
          <textarea
            rows="6"
            name="message"
            value={message}
            // onChange={(e) => setMessage(e.target.value)}
            onChange={(e) => handleInputChange(e, "message")}
            className={`bg-gray-50 text-gray-900 text-md cursor-pointer block w-full p-2.5
             px-4 py-2 border rounded-lg focus:ring-1 focus:ring-green-200 focus:border-green-500 hover:border-green-500 outline-none
              ${
                formSubmitted && errorMessage.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="Query/Suggestion..."
            // required
          />
          {errorMessage.message && (
            <p className="text-red-500">{errorMessage.message}</p>
          )}
        </div>

        {/* Begin Contacted Checkbox */}
        <div className="flex  justify-between mt-5 py-3 items-center text-sm text-mediumgrey  ">
          <label className="flex items-center ">
            <input
              className="mr-2 focus:ring-1
               focus:ring-green-200 focus:border-green-500 hover:border-green-500 appearance accent-green-600  "
              type="checkbox"
              name="check"
              value="Begin Contacted"
              checked={check === "Begin Contacted"}
              // onChange={(e) => setCheck(e.target.value)}
              onChange={(e) => handleInputChange(e, "check")}
            />
            <span>
              I consent to being contacted by the team
              <span className="text-green-500 ml-1 ">*</span>
            </span>
          </label>
        </div>
        {errorMessage.check && (
          <p className="text-red-500">{errorMessage.check}</p>
        )}
        {/* Submit */}
        <button
          type="submit"
          value="Send"
          className="my-6 p-3  w-full  text-white   
                   rounded-lg border-green-600  
                    bg-green-600 hover:scale-105"
        >
          Submit
        </button>
        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-0 left-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white p-6 m-6  rounded-lg  ">
              <div className=" flex items-center space-x-2 mb-4">
                <FaCheckCircle className="text-green-500" />
                <p className="text-lg font-semibold ">{successMessage}</p>
              </div>
              <p className="text-lg font-semibold mb-4">
                Thanks for completing the form. we'll be in touch soon!
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  onClick={handleCloseSuccessMessage}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
