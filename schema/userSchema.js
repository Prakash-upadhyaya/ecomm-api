import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// UserSchema.pre("save", function (next) {
//   let user = this;
//   if (user.isModified("password")) {
//   }
// });

const User = mongoose.model("User", UserSchema);
export default User;

// userSchema.pre("save", function (next) {
//   var user = this;
//   if (user.isModified("password")) {
//     bcrypt.genSalt(SALT_I, (err, salt) => {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });
// userSchema.methods.comparePassword = function (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };
