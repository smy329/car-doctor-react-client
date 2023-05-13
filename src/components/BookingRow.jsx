const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { img, name, email, price, serviceTitle, date, _id, status } = booking;

  return (
    <tr>
      <th>
        <button
          className="btn btn-sm btn-circle"
          onClick={() => {
            handleDelete(_id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceTitle}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{date}</td>
      <th>
        {status === 'confirm' ? (
          <span className="font-bold">Confirmmed</span>
        ) : (
          <button
            className="btn btn-success btn-xs"
            onClick={() => {
              handleBookingConfirm(_id);
            }}
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
