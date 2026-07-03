public class TypeCastingExample {
    public static void main(String[] args) {

        // Double to Int
        double decimalNumber = 45.67;
        int intNumber = (int) decimalNumber;

        // Int to Double
        int wholeNumber = 25;
        double doubleNumber = (double) wholeNumber;

        // Display results
        System.out.println("Original double value: " + decimalNumber);
        System.out.println("Double cast to int: " + intNumber);

        System.out.println("Original int value: " + wholeNumber);
        System.out.println("Int cast to double: " + doubleNumber);
    }
}