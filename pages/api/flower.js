import { flowers } from "../../data";


export default function handler(req, res) {
  if (req.method === "GET") {
req.query.startsWith
    res.status(200).json({
      data: flowers.filter((flower) => {
        return flower.name.toLowerCase().includes(req.query.startsWith.toLowerCase()) 
      }),
      message: "Success",

    })
    
  }

  else {
    res.status(400).send({
      data: [],
      message: "Bad Request.",
    });
  }


}
