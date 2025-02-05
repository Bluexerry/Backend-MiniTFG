import { ObjectId } from 'mongodb';
import { db } from '../loaders/mongoDB.js';
import Comment from '../models/commentModel.js';

export async function createComment(data) {
    // El modelo asigna automáticamente la fecha actual
    const commentModel = new Comment(data);
    const collection = db.collection("comments");
    const result = await collection.insertOne({
        routineId: commentModel.routineId,
        username: commentModel.username,
        comment: commentModel.comment,
        date: commentModel.date
    });
    return { _id: result.insertedId, ...commentModel };
}

export async function getCommentsByUsername(username) {
    const collection = db.collection("comments");
    const comments = await collection.find({ username }).toArray();
    return comments;
}

export async function deleteCommentById(id) {
    const collection = db.collection("comments");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result;
}