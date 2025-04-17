"use client";
import { Input } from "@heroui/input";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { database } from "../firebase";
import { ref, set } from "firebase/database";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registration, setRegistration] = useState("");

  const handleSubmit = async () => {
    if (name === "" || email === "" || phone === "" || registration === "") {
      console.log("Please fill all the form fields");
      return;
    }

    try {
      await set(ref(database, `${registration}/${email.split("@")[0]}`), {
        Name: name,
        Email: email,
        Phone: phone,
        RegNo: registration,
      });
      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="flex flex-col border-2 border-gray-300 rounded p-3 space-y-4 w-full max-w-lg mx-auto mt-10">
      <Input
        label="Username"
        placeholder="Enter your username"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Phone No."
        placeholder="Enter your phone number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        label="Registration No."
        placeholder="Enter your registration number"
        type="tel"
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
      />
      <Input
        label="Email Id"
        placeholder="Enter your email id"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        className="w-fit px-4 py-2"
        color="success"
        variant="ghost"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Register;
