---
sidebar_position: 15
---

# Create Azure compute gallery for Terraform code


In Azure Cloud, By default the image which is shared by me in training is not available to use from the command line directly, Hence in terraform while creating the virtual machines we face a challange, to avoid this we will create a VM from the image which I shared and then we convert that VM to a image. Then you use that image in your Terraform code.

# Steps to create azure compute gallery.

#### 1. Create VM ( devops-practice image )  with specified size or More Size

<img width="1151" alt="image" src="https://github.com/user-attachments/assets/c3744ad9-6b43-413f-b33b-43216b2b2ff5" />

### 2. Stop the VM For creating Image.

<img width="1159" alt="image" src="https://github.com/user-attachments/assets/8d351a7e-6e89-4063-8596-8acb6a093c7e" />

### 3. Select Capture & click the Image it's redirects to new window..

![image](https://github.com/user-attachments/assets/30a67907-51fa-409e-9894-b02265b3c2ac)

### 4. Fill the details, IMP details [ Version - 1.0.0 ]

<img width="1373" alt="image" src="https://github.com/user-attachments/assets/09b1ebb1-fe29-4d8c-ae24-b3f2d9dce7ec" />

### 5. Go to search bar, type Azure compute galleries

<img width="1322" alt="image" src="https://github.com/user-attachments/assets/27393eb9-f920-4205-b4e2-db2d23e057a1" />

### 6. We will see your Image immediately, But In backend it actually creating ..wait.. for few 5-10 mins.

<img width="1319" alt="image" src="https://github.com/user-attachments/assets/96885291-156e-43fc-bb38-93632d8e782a" />

### 7. We will Image details.

<img width="1382" alt="image" src="https://github.com/user-attachments/assets/11d17416-f9b3-48b4-964b-b82b0071cf8a" />

### 10. Multiple selects..

![image](https://github.com/user-attachments/assets/de36b147-8410-4e19-bda0-0f767e8b7a3b)

### 11. Final Step

<img width="1357" alt="image" src="https://github.com/user-attachments/assets/a281ab07-4332-4980-8a8f-5932055d95b2" />





