import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// Record Definition
record Person(String name, int age) {}

public class RecordExample {

    public static void main(String[] args) {

        // Create Person objects
        Person p1 = new Person("Anu", 18);
        Person p2 = new Person("Ravi", 25);
        Person p3 = new Person("Priya", 16);
        Person p4 = new Person("Kiran", 22);

        // Print individual records
        System.out.println("Person Records:");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        System.out.println(p4);

        // Store records in a list
        List<Person> people = Arrays.asList(p1, p2, p3, p4);

        // Filter persons aged 18 or above
        List<Person> adults = people.stream()
                                    .filter(person -> person.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("\nAdults (Age >= 18):");
        adults.forEach(System.out::println);
    }
}