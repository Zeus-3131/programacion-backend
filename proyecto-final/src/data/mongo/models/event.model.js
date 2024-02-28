import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "events";
const schema = new Schema(
  {
    title: { type: String, required: true, index: true },
    imagen: {
      type: String,
      default: "https://i.postimg.cc/HxdvTwqJ/events.jpg",
    },
    precio: { type: Number, default: 300000 },
    stock: { type: Number, default: 50 },
    date: { type: Date, default: new Date(), index: true },
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const Event = model(collection, schema);
export default Event;
