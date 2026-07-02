// Base class
class Animal {

    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Subclass
class Dog extends Animal {

    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}

// Main class
public class InheritanceExample {

    public static void main(String[] args) {

        Animal animal = new Animal();
        Dog dog = new Dog();

        System.out.print("Animal Sound: ");
        animal.makeSound();

        System.out.print("Dog Sound: ");
        dog.makeSound();
    }
}