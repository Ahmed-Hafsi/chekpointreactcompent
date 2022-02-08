import ahmed from './assets/ahmed.jpg';
import ouchtata from './assets/ouchtata.jpg';

const  ProfilePhoto= () => {
    const ProfilePhoto = [
      {
       name: "Ahmed",
       img: ahmed ,
       Adresse: " BEJA",
      },
      {
        name: "Fraise",
        img: ouchtata,
        Adresse: "OUCHTATA",
      },
      {
        name: "Adventures",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GBL4hSzNBjTtH2havCodAizkp-T_Tkdrh2xYwEm4SBrp4VKhDd5O_739bmZxOa0fQX0&usqp=CAU",
        Adresse: "TUNISIE",
      },
      {
        name: "Restaurants",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyCch1_jr06LSf3okw4ws7w35YtYb97Ge2q3CEGbTy3jveoA7_ntVE02bxoaO0KkZT68&usqp=CAU",
        Adresse: "TABARKA",
      },
    ];
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto auto",
          justifyContent: "space-evenly",
          width: "80%",
          flexWrap: "wrap",
          marginTop: "80px",
        }}
      >
        {ProfilePhoto.map((Profile) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "50%",
                marginBottom: "20px",
                border: "1px solid grey",
              }}
            >
              <img
                src={Profile.img}
                alt={Profile.name}
                height={100}
                width={130}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto auto",
              
                }}
              >
                <h4>{Profile.name}</h4>
                <p>{Profile.Adresse}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ProfilePhoto;
  