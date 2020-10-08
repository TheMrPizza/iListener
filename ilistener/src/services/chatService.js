import app from './../firebase';

const addToPendingUsers = (user, successCallback, failCallback) => {
    let collectionName = '';
    if (user.isAdvisor) {
        collectionName = 'pendingAdvisors';
    }
    else{
        collectionName = 'pendingUsers';
    }

    const db = app.firestore();
    db.collection(collectionName).add(
        user.firebaseUser.uid,
        user.name
    )
    .then(successCallback)
    .catch(failCallback);
};