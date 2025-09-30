import conf from '../conf/conf'
import { Client,ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug || ID.unique(),  // Use slug if provided, else auto-generate ID
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        );
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error);
        throw error; // Optional: re-throw if you want the caller to handle it
    }
}

    async updatePost(slug, { title, content, featuredImage, status }) {
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            { title, content, featuredImage, status }
        );
    } catch (error) {
        console.log("Appwrite service :: updatePost :: error", error);
        return null;
    }
}
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return null;
        }
    }

    async getPost(slug) {
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        );
    } catch (error) {
        console.log("Appwrite service :: getPost :: error", error);
        return null; // ✅ Better than false for a failed data fetch
    }
}

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return null;
        }
    }

    //file upload services

    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: fileUpload :: error", error);
            return false;
        }

    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

     getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}

const service = new Service();
export default service