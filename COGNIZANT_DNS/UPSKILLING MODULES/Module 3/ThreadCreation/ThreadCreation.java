class MyThread extends Thread {

    private String message;

    // Constructor
    public MyThread(String message) {
        this.message = message;
    }

    @Override
    public void run() {

        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - Count: " + i);

            try {
                Thread.sleep(500); // Pause for 0.5 second
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class ThreadCreation {

    public static void main(String[] args) {

        MyThread thread1 = new MyThread("Thread 1 is running");
        MyThread thread2 = new MyThread("Thread 2 is running");

        // Start both threads
        thread1.start();
        thread2.start();
    }
}