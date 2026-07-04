public class Product{
    int productID;
    String productName;
    String category;
    public Product(int productID, String productName, String category){
        this.productID=productID;
        this.productName=productName;
        this.category=category;
    }
    public void display(){
        System.out.println(productID + " " + productName + " " + category);
    }
}