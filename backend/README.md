# Short Description

The Node.js app - a simple public chat. Where unauthenticated users can post text and everyone else can read them.
Posts stored in database, and users can get or create posts by using REST API.

# Basic requirements

- Post must contain username and text.
- Before save a post check that text is less than 200 symbols and username contains only letters and numbers.
- REST API should have 2 endpoints:
  1. Get all posts (with pagination).
  2. Create post. Should return error if text or username failed validation.
- Postman collection for testing
- Documentation using swagger

# Additional requirements (Nice to have)

- Preferably use MongoDB/PostgreSQL/DynamoDB.
- Write tests for endpoints, so we can easily make sure that API.
- Deploy using AWS/GCP/Azure or etc.
- Use docker-compose or k8s and deploy using CI/CD (for example Wercker).
- JWT Authentication\Authorization.
- Add caching to the blog routes.
- Security best practices.
- Split app into microservices using best practices.
- Pizza and coffee.

For any questions even silly ones write to our HR Anna
Email - anna@fulcrum.rocks
