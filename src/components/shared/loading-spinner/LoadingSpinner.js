import React from "react";

const LoadingSpinner = ({ message = "", type = "full" }) => {
  const formattedMessage = !message.length ? "Loading..." : message;

  if (type === "full") {
    return (
      <div className="content content-narrow">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
                <i class="fa fa-spinner fa-spin"></i> {formattedMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <span>
      <i class="fa fa-spinner fa-spin"></i>
      {formattedMessage}
    </span>
  );
};

export default LoadingSpinner;
