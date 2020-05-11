import {addNewContact,
        getContacts,
        getContactById,
        updateContact,
        deleteContact} from '../controllers/crmControllers';

 const routes = (app) => {
    app.route('/contact')
        .get(
            (req, res, next) => {
            //middleware
            console.log(`Request ${req.originalUrl}`);
            next();
        },
        //fetches all contacts 
        getContacts
        )

        .post(addNewContact);
            
    
    app.route('/contact/:contactId') 
        //retrieves specific contact by id
        .get(getContactById)

        //updates specific contact by id
        .put(updateContact) 

        //deletes specific contact by id
        .delete(deleteContact);  
       
}

export default routes;