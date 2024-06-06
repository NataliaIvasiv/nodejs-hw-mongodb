import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
        },
    email: {
        type: String,
        required: false,
        },
    isFavourite: {
        type: Boolean,
        required: true,
        default: false,
    },
    contactType: {
      type: String,
      required: true,
        enum: ["work", "home", "personal"],
      default: 'personal',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactsSchema);