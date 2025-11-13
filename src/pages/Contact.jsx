import React, { useState } from "react";
import { useForm } from "react-hook-form";
import contactBackground from "../assets/home/contactBackground.webp";
import maskShape from "../assets/home/Maskgroup.png";
import vectorShape from "../assets/home/Vector_form.png";
import contactDeviderImg from "../assets/bgVector/contactDevider.png";
import { sendOtp, verifyOtp, saveLead } from "../helpers/otp";

export default function ContactUs() {
  const [step, setStep] = useState("form"); // 👉 form | otp | success
  const [formData, setFormData] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // Form Submit Handler
  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    setFormData(data);
    setStep("otp");
    const otpRes = await sendOtp(data.phone);
    console.log("OTP Send Response:", otpRes);
  };
  
  const handleOtpVerify = async (e) => {
    e.preventDefault(); // ✅ stops page refresh
    
    const result = await verifyOtp(formData.phone, otp);
    
    if (result?.description?.desc === "Code Matched successfully.") {
      formData.pageUrl = window.location.href; 
      console.log(formData);
      
      setOtpError("");
      setStep("success");
      await saveLead(formData);
    } else {
      setOtpError("Invalid OTP. Try again.");
    }
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${contactBackground})`,
      }}
    >
      <div className="flex justify-center items-center md:w-1/2 bg-black/60 text-white px-6 md:px-10 py-16">
        <div className="w-full max-w-[560px] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-8">
          <h2 className="text-[70px] leading-[100%] tracking-[0px] align-middle uppercase font-normal font-maharlika">
            REACH OUT TO VIBEZ ESTATES
          </h2>

          <p className="text-base md:text-lg leading-relaxed opacity-90 font-poppins font-normal text-[20px]">
            Connect with us to explore luxurious living and investment
            opportunities that redefine comfort and profitability.
          </p>
          <div className="bg-[#6b4b3e] px-10 py-10 rounded-lg shadow-lg w-full max-w-[560px] mx-auto mt-8">
            <div className="flex justify-center">
              <h3 className="font-semibold text-2xl mb-8 text-center md:text-left tracking-wide">
                Contact details
              </h3>
            </div>
            <div className="flex justify-between items-start md:text-base text-sm text-white">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="opacity-90">info@vibezclub.com</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone number</p>
                  <p className="opacity-90">+91 8152 88 33 88</p>
                </div>
              </div>

              <img className="w-[37px]" src={contactDeviderImg} alt="divider" />

              <div className="max-w-[200px]">
                <p className="font-semibold mb-1">Address</p>
                <p className="opacity-90 leading-relaxed">
                  #200, 4th floor, 10th cross, CBI Main Road,
                  Ganganagar, Bangalore – 560032.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div
        className="relative flex justify-center items-start md:w-1/2 text-gray-800 overflow-hidden bg-[#f8f5f2] pt-20 pb-16"
        style={{
          backgroundImage: `url(${maskShape}), url(${vectorShape})`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, bottom right",
          backgroundSize: "250px, 480px",
        }}
      >
        {/* STEP-1: SHOW ORIGINAL FORM */}
        {step === "form" && (
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="relative grid grid-cols-1 gap-6 w-full max-w-[460px] p-10 z-10"
            noValidate
          >
            <h3 className="text-2xl font-semibold mb-2">Get in touch</h3>
            <p className="text-sm text-gray-600 mb-4">
              Please fill out the form below and we’ll get back to you.
            </p>

            {[
              {
                name: "name",
                label: "Name",
                type: "text",
                required: false,
              },
              {
                name: "email",
                label: "Email",
                type: "email",
                required: false,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              },
              {
                name: "phone",
                label: "Phone number",
                type: "tel",
                required: false,
                pattern: {
                  value: /^[6-9][0-9]{9}$/, // 10 digit starts with 6,7,8,9
                  message:
                    "Enter valid 10-digit number starting with 6, 7, 8, or 9",
                },
              },
            ].map((field) => (
              <div key={field.name}>
                <input
                  type={field.type}
                  placeholder={`${field.label}*`}
                  className={`w-full border-b ${
                    errors[field.name] ? "border-red-500" : "border-gray-400"
                  } focus:border-[#6b4b3e] outline-none py-3 bg-transparent placeholder:text-gray-700`}
                  {...register(field.name, {
                    required: `${field.label} is required`,
                    pattern: field.pattern,
                  })}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            ))}

            <div>
              <select
                className={`w-full border-b ${
                  errors.project ? "border-red-500" : "border-gray-400"
                } focus:border-[#6b4b3e] outline-none py-3 bg-transparent text-gray-700`}
                {...register("project", { required: "Project is required" })}
                defaultValue=""
              >
                <option value="" disabled>
                  Project name*
                </option>
                <option value="Luxury Villa">Luxury Villa</option>
                <option value="Managed Farm Lands">Managed Farm Lands</option>
                <option value="Revenue Generation">Revenue Generation</option>
              </select>
              {errors.project && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.project.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                rows="3"
                placeholder="Message*"
                className={`w-full border-b ${
                  errors.message ? "border-red-500" : "border-gray-400"
                } focus:border-[#6b4b3e] outline-none py-3 bg-transparent resize-none placeholder:text-gray-700`}
                {...register("message")}
              ></textarea>
          
            </div>

            <div className="flex justify-start mt-4">
              <button
                type="submit"
                className="border border-[#6b4b3e] text-[#6b4b3e] py-2 px-10 hover:bg-[#6b4b3e] hover:text-white transition"
              >
                SEND
              </button>
            </div>
          </form>
        )}

        {/* STEP-2: OTP SCREEN */}
        {step === "otp" && (
          <form
            onSubmit={verifyOtp}
            className="w-full max-w-[380px] p-10 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-center mb-4">
              OTP Verification
            </h3>

            <p className="text-gray-600 mb-4 text-center">
              OTP sent to <strong>{formData?.phone}</strong>
            </p>

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border-b border-gray-400 focus:border-[#6b4b3e] outline-none py-3 text-center text-lg"
            />

            {otpError && (
              <p className="text-red-500 text-sm mt-2">{otpError}</p>
            )}

            <button
              
              className="mt-6 w-full bg-[#6b4b3e] text-white py-2 rounded hover:bg-[#573c32]"
              onClick={handleOtpVerify}
            >
              VERIFY OTP
            </button>
          </form>
        )}

        {/* STEP-3: SUCCESS SCREEN */}
        {step === "success" && (
          <div className="w-full max-w-[380px] p-10 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-green-600">
              ✅ Success!
            </h3>
            <p className="mt-3 text-gray-700">
              Your details have been successfully submitted. We will reach out
              to you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
