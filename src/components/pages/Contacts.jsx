import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { selectIsLoading, selectError } from '../redux/selectors';
import { Loader } from '../Loader/Loader';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { fetchContacts } from '../redux/operations';


const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
        <Helmet>
            <title>Contacts</title>
            <meta name="description" content="Contacts page of the phonebook."/>
            <meta name="keywords" content="phonebook"/>
        </Helmet>
        {isLoading && !error && <Loader />}
        <div>
            <h2>Phonebook</h2>
            <ContactForm />
        </div>
        <div>
            <h3>Contacts</h3>
            <Filter />
        </div>
        <ContactList error={error} />
        </main>
    );
};

export default Contacts;