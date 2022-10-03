export const FlowerCard = ({ family, photo, scientific_name, name }) => {
  return (
    <>
      <div className="container flex col g-3">
        <img className="photo" alt="cover.png" src={photo} />
        <h3 className="name">{name}</h3>
        <div className="alt info flex row g-3">
          <p className="scientific_name">{scientific_name}</p>
          <p>|</p>
          <p>{family}</p>
        </div>
      </div>
      <style jsx>{`
        .alt {
          color: #808080;
        }
        .container {
          flex-shrink: 0;
          justify-content: space-between;
          width: 300px;
        }
        .container .info {
          align-items: center;
          text-transform: uppercase;
        
        }
        .container .info .scientific_name {
          flex-shrink: 0;
        }
        .container .photo {
          height: 400px;
          object-fit: cover;
          width: 100%;
        }
        .container .name {
          flex-shrink: 0;
        }

        


      `}</style>
    </>
  );
};
