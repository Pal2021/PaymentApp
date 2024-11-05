import React from "react";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Help Page</h1>
      <p className="text-center">
        Welcome to the help section! Here you'll find various resources and
        information to assist you with your queries. If you need further
        assistance, please contact support.
      </p>
      <p className="mt-4">Here are some common questions:</p>
      <ul className="list-disc mt-2 pl-5">
        <li>How to reset your password?</li>
        <li>How to view your transaction history?</li>
        <li>How to contact customer support?</li>
      </ul>
    </div>
  );
};

export { Help };
