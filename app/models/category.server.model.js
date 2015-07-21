'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Validation
 */
function validateLength (v) {
  // a custom validation function for checking string length to be used by the model
  return v.length <= 30;
}

/**
 * Category Schema
 */
var CategorySchema = new Schema({
    description: {
        type: String,
        default: '',
        // types have specific functions e.g. trim, lowercase, uppercase (http://mongoosejs.com/docs/api.html#schema-string-js)
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true,     
        unique : true,
        // make this a required field
        required: 'name cannot be blank',
        // wires in a custom validator function (http://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).
        validate: [validateLength, 'name must be 30 chars in length or less']
    },
    category: {
        type: String,
        default: '',
        trim: true
    }
}
);

// Expose the model to other objects (similar to a 'public' setter).
mongoose.model('Videos', CategorySchema);