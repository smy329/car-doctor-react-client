import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Checkout = () => {
  const params = useParams();

  const [serviceData, setServiceData] = useState({});
  const { _id, title, price, service_id, img } = serviceData;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://car-doctor-server-three-kappa.vercel.app/services/${params.id}`
    )
      .then((response) => response.json())
      .then((data) => setServiceData(data))
      .catch((error) => error.message);
  }, [params.id]);

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const bio = form.bio.value;

    const checkoutData = {
      name,
      date,
      phone,
      email,
      bio,
      img,
      price,
      service: _id,
      serviceTitle: title,
    };
    console.log(checkoutData);

    fetch(`https://car-doctor-server-three-kappa.vercel.app/checkout`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(checkoutData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          //console.log('Order confirmed');
          toast.success('Your order has been confirmed successfully');
        }
      })
      .catch((error) => error.message);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <form onSubmit={handleCheckout}>
        <div className="card-body w-2/3 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Last Name"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Your Bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
              name="bio"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-orange-600 border-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
