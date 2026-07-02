// Interface
interface Playable {
    void play();
}

// Guitar class implementing Playable
class Guitar implements Playable {

    @Override
    public void play() {
        System.out.println("Playing the Guitar");
    }
}

// Piano class implementing Playable
class Piano implements Playable {

    @Override
    public void play() {
        System.out.println("Playing the Piano");
    }
}

// Main class
public class InterfaceImplementation {

    public static void main(String[] args) {

        Guitar guitar = new Guitar();
        Piano piano = new Piano();

        guitar.play();
        piano.play();
    }
}