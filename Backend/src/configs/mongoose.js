import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
import slugUpdate from "mongoose-slug-updater";
import mongooseDelete from "mongoose-delete";
export const configMongoose = (Model) => {
  mongoose.plugin(slug);
  mongoose.plugin(slugUpdate);
  Model &&
    Model.plugin(mongooseDelete, {
      deletedAt: true,
      overrideMethods: true,
    });
};
