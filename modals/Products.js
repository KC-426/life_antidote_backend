const mongoose = require("mongoose");
const Products_Schema = new mongoose.Schema(
  {
    product_id: {
      type: String,
    },
    product_code: {
      type: String,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_slug: {
      type: String,
      required: true,
    },
    product_variant: {
      type: String,
    },

    product_reword_point: {
      type: Number,
      default: 0,
    },
    // product_gst:{
    //     type:Number
    // },
    product_regular_price: {
      type: Number,
      required: true,
      default: 0,
    },
    product_sale_price: {
      type: Number,
      required: true,
      default: 0,
    },
    new_arrival: {
      type: Boolean,
      default: false,
    },
    trending_product: {
      type: Boolean,
      default: false,
    },
    product_price: {
      type: Number,
    },
    color: {
      type: String,
      default: "N/A",
    },
    size: {
      type: String,
      default: "N/A",
    },
    cartoon_total_products: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    original_quantity: {
      type: Number,
    },
    product_tag: {
      type: String,
    },

    // shop_name:{
    //     type:String,
    //     required:true
    // },
    // shop_id:{
    //     type:String,
    //     required:true
    // },
    product_images: [
      {
        image_name: { type: String },
        image_url: { type: String },
        path: { type: String },
      },
    ],
    product_main_category: {
      type: String,
      required: true,
    },
    product_main_category_slug: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },
    product_category_slug: {
      type: String,
      required: true,
    },
    product_subcategory: {
      type: String,
      required: true,
    },
    product_subcategory_slug: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
    },
    // product_status:{
    //     type:String,
    //     required:true,
    //     default:"pending"
    // },
    // product_active:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", Products_Schema);
