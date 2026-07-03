import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExpressions {

    public static void main(String[] args) {

        // Create a list of strings
        List<String> names = new ArrayList<>();

        names.add("Ravi");
        names.add("Anu");
        names.add("Priya");
        names.add("Kiran");
        names.add("Bhavya");

        System.out.println("Original List:");
        System.out.println(names);

        // Sort using lambda expression
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));

        System.out.println("\nSorted List:");
        System.out.println(names);
    }
}