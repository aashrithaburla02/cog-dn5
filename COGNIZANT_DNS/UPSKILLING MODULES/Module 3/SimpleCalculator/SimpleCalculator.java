import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");

        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Result = " + (num1 + num2));
                break;
            case 2:
                System.out.println("Result = " + (num1 - num2));
                break;
            case 3:
                System.out.println("Result = " + (num1 * num2));
                break;
            case 4:
                if (num2 != 0)
                    System.out.println("Result = " + (num1 / num2));
                else
                    System.out.println("Division by zero is not allowed.");
                break;
            default:
                System.out.println("Invalid choice");
        }

        sc.close();
    }
}