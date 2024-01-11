# Tiểu luận chuyên ngành Công nghệ phần mềm
- Đề tài: **Xây dựng website bán hàng điện tử sử dụng Mern stack**
- GVHD: ThS. NGUYỄN HỮU TRUNG
- GVPB: ThS. TRƯƠNG THỊ NGỌC PHƯỢNG
- SVTH:
  - Ngô Hoàng Duy 			19145166
  - Đỗ Ngọc Duy Hưng			20145267

## Demo
[This application is deployed on cyclic.sh Please check it out : 😀 smile](https://rose-uninterested-quail.cyclic.app/) 
Website load may take some time, so please wait.

## 🖥️ Tech Stack
**Frontend:**

![reactjs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)&nbsp;
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)&nbsp;
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)&nbsp;
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)&nbsp;


**Backend:**

![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![expressjs](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)&nbsp;
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)&nbsp;
![jwt](	https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)&nbsp;

**Payment Gateway:**

![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

**Deployed On:**

[Cylic.sh](https://www.cyclic.sh/)

**Image Management:** [Cloudinary](https://cloudinary.com/)





## 🚀 Features
- Login/Signup User Account
- Update Profile/Password User Account
- Forgot Password Mail
- User can view Single Product
- Cart Add/Remove Items | Update Quantities
- Products Pagination (Default 8 Products Per Page)
- Product Search
- Product Filters Based on Category, Ratings, Price
- Shipping Info in Session Storage
- Before payment user passes 3 steps Shipping Address | Confirm Order | Card Details
- History my Orders 
- Order Details of All Ordered Item
- Review/rating Products User Account
- Admin: Dashboard access to only admin roles
- Admin: Add/Update/Delete Products
- Admin: Update/Delete User Account
- Admin: View/Delete Review



## Database Seed

* The seed command will put products in database
* For more information, see code [here](Backend/seeder/seeder.js)

```
npm run seed
```