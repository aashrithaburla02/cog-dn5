public class Search{
    public static Product linearSearch(Product[] products, int id){
        for(int i = 0; i<products.length; i++){
            if(products[i].productID == id){
                return products[i];
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int id){
        int low=0;
        int high=products.length-1;
        while(low<=high){
            int mid=(low+high)/2;
            if(products[mid].productID == id)
                return products[mid];
            else if(id<products[mid].productID)
                high=mid-1;
            else
                low=mid+1;
            }
            return null;
    }
    public static void main(String[] args){
        Product[] products={new Product(101, "Laptop", "Electronics"),
        new Product(102, "Mobile", "Electronics"),
        new Product(103, "Shoes", "Fashion"),
        new Product(104, "Watch", "Accessories"),
        };
        System.out.println("Linear Search:");
        Product p1 = linearSearch(products, 103);
        if(p1!=null)
            p1.display();
        System.out.println();
        System.out.println("Binary Search:");
        Product p2 = binarySearch(products, 103);
        if(p2!=null)
            p2.display();
    }
}