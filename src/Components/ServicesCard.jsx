import React from "react";

const ServiceCard = ({ service, onBook }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-slate-900">
        {service.name}
      </h3>

      {service.description && (
        <p className="text-sm text-slate-600 line-clamp-3">
          {service.description}
        </p>
      )}

      <p className="text-base font-bold text-blue-600">
        ₹{service.price}
      </p>

      {service.duration && (
        <p className="text-xs text-slate-500">
          Duration: {service.duration}
        </p>
      )}

      {onBook && (
        <button
          onClick={() => onBook(service)}
          className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800"
        >
          Book Now
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
