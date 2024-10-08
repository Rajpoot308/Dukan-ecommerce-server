const mongoose = require('mongoose');



const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    images: [
        {
            type: String,
        }
    ],
    color: {
        type: String,
    },
    parentId: {
        type: String
    }
}, { timestamps: true })

categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});

exports.Category = mongoose.model('Category', categorySchema);
exports.categorySchema = categorySchema;

// const categorySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     slug: {
//         type: String,
//         unique: true,
//     },
//     images: [
//         {
//             type: String,
//         },
//     ],
//     color: {
//         type: String,
//     },
//     parentId: {
//         type: String,
//     },
// }, { timestamps: true });

// // Virtual to return 'id' instead of '_id'
// categorySchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// categorySchema.set('toJSON', {
//     virtuals: true,
// });

// // Pre-save hook to auto-generate slug if it's not provided
// categorySchema.pre('save', function (next) {
//     if (!this.slug) {
//         this.slug = slugify(this.name, { lower: true });
//     }
//     next();
// });

// exports.Category = mongoose.model('Category', categorySchema);
// exports.categorySchema = categorySchema;
