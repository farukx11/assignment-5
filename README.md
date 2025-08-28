# 🚨 Emergency Service Directory

A simple web app built using **HTML, CSS, and JavaScript** that provides **emergency hotline numbers**. Users can **copy numbers**, **simulate calls**, and view **call history**.

---

## 📌 Features

✔ View emergency contact numbers  
✔ Copy hotline numbers to clipboard  
✔ Call simulation (with coin deduction system)  
✔ Track **copy count** and **call history**  
✔ Responsive design

---

## ⚡ Project Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/farukx11/assignment-5.git
   ```
2. **Open the project folder**
   ```bash
   cd emergency-service
   ```
3. **Run in browser**  
   Simply open `index.html` in your browser.

---

## 🧠 Questions & Answers

### **1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll**

- **getElementById** → Selects **one element** by `id`. Returns a single element.
- **getElementsByClassName** → Selects elements by class name. Returns an **HTMLCollection** (not an array).
- **querySelector** → Selects the **first element** matching a CSS selector.
- **querySelectorAll** → Selects **all elements** matching a CSS selector. Returns **NodeList**.

---

### **2. How to create and insert a new element into the DOM**

Steps:

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);
```

---

### **3. What is Event Bubbling?**

Event Bubbling means the event starts at the **target element** and bubbles **up to the parent elements**.  
Example: Clicking on a child also triggers its parent’s click event (if attached).

---

### **4. What is Event Delegation and why is it useful?**

Event Delegation means attaching a **single event listener to a parent element** to handle events on its children using `event.target`.  
✔ Saves memory (fewer listeners)  
✔ Works with **dynamically added elements**

---

### **5. Difference between preventDefault() and stopPropagation()**

- **preventDefault()** → Stops the **default browser action** (e.g., form submission).
- **stopPropagation()** → Stops the event from **bubbling up** to parent elements.

---

## 🧪 Challenges (10 Marks)

✔ Show alert and increase **copy count** on clicking **Copy button**  
✔ Copy hotline number to clipboard

Example:

```javascript
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number);
    alert(`Copied number: ${number}`);
    copyCount++;
    document.getElementById("copyCount").textContent = copyCount;
  });
});
```

---

## 🖼 Screenshots

_Add screenshots of your project UI here._  
Example:

```
![Home Page](./screenshots/home.png)
```

---

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript
