# **node-red-contrib-numbertoascii**  
> **Convert numbers into ASCII character sequences in Node-RED.**  

## **Overview**  
This Node-RED node takes a **numeric input** and converts it into:  
1. **An ASCII character array** (based on 3-digit and 2-digit ASCII encoding rules).  
2. **A final ASCII string** that represents the extracted characters.

## **Installation**  
To install this node, run:  
```sh
npm install node-red-contrib-numbertoascii
```

## **Usage**  
### **Input**  
The node expects a **numeric value** (either as a number or a string).  
Each **2-digit or 3-digit segment** of the number is interpreted as an **ASCII code**.

### **Output**  
The node outputs an object with:  
- `asciiArray`: An array of ASCII character codes.  
- `asciiString`: The corresponding ASCII text.  

### **Example Inputs & Outputs**  
#### **Example 1**  
📥 **Input:** `6566676869`  
📤 **Output:**  
```json
{
    "asciiArray": [65, 66, 67, 68, 69],
    "asciiString": "ABCDE"
}
```

#### **Example 2**  
📥 **Input:** `1106577110`  
📤 **Output:**  
```json
{
    "asciiArray": [110, 65, 77, 110],
    "asciiString": "nAMn"
}
```

#### **Example 3**  
📥 **Input:** `123656667101120656667`  
📤 **Output:**  
```json
{
    "asciiArray": [123, 65, 66, 67, 101, 120, 65, 66, 67],
    "asciiString": "{ABCexABC"
}
```

## **How It Works**  
1. **Splitting the Number:**  
   - The node tries to extract **3-digit ASCII codes** first (if valid).  
   - If not, it falls back to **2-digit ASCII codes**.  

2. **Conversion to ASCII:**  
   - The extracted numbers are converted into their **corresponding characters**.  

3. **Error Handling:**  
   - If an invalid ASCII sequence is found, an error message is displayed.  
   - The input must be **numeric** (not raw text).  

## **Node Properties**  
- **Name (optional):** A custom name for the node.  

## **Installation in Node-RED**  
1. Open **Node-RED**.  
2. Go to **Manage Palette → Install**.  
3. Search for `"node-red-contrib-numbertoascii"` and install it.  

Alternatively, install via **command line**:  
```sh
cd ~/.node-red
npm install node-red-contrib-numbertoascii
```
Then restart Node-RED:  
```sh
node-red-restart
```

## **License**  
📜 **GPL-3.0** – Free to use, modify, and distribute.  

