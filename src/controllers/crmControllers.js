import mongoose from 'mongoose';
import {ContactSchema} from '../models/crmModels';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = function(req, res) {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err){
            console.log('An Error has occurred');
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContacts = function(req, res) {

    Contact.find({}, (err, contact) => {
        if (err){
            console.log('An Error has occurred');
            res.send(err);
        }
        res.json(contact);
    });
};

export const getContactById = function(req, res) {

    Contact.findById(req.params.contactId, (err, contact) => {
        if (err){
            console.log('An Error has occurred');
            res.send(err);
        }
        res.json(contact);
    });
};

export const updateContact = function(req, res) {

    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {new: true, useFindAndModify: false}, (err, contact) => {
        if (err){
            console.log('An Error has occurred');
            res.send(err);
        }
        res.json(contact);
    });
};

export const deleteContact = function(req, res) {

    Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
        if (err){
            console.log('An Error has occurred');
            res.send(err);
        }
        res.json({message : 'Contact has been deleted!'});
    });
};

