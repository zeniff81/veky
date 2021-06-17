import React from "react";

const dummy = [
  {
    location: "principal bonao",
    phone: "829-780-7691"
  },
  {
    location: "san pedro de macoris",
    phone: "829-780-1594"
  },
  {
    location: "las palmas de herrera",
    phone: "809-456-7448"
  },
  {
    location: "santo domingo este",
    phone: "829-780-4681"
  },
  {
    location: "principal bonao",
    phone: "809-780-3333"
  }
];

function OurAgents() {
  return (
    <div className='ouragents'>
      <div className='titles'>
        <div className='title1'>nuestros</div>
        <div className='title2'>representantes</div>
      </div>
      <div className='content'>
        {dummy.map((el) => (
          <Agent key={el.phone} location={el.location} phone={el.phone} />
        ))}
      </div>
    </div>
  );
}

function Agent({ phone, location }) {
  return (
    <div className='agent'>
      <div className='location'>{location}</div>
      <div className='phone'>{phone}</div>
    </div>
  );
}

export default OurAgents;
