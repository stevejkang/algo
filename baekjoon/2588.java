import java.util.*;

public class Main {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        String number = String.valueOf(b);
        char[] digits = number.toCharArray();

        for (int i = digits.length - 1; i >= 0; i--) {
            System.out.println(a * Integer.parseInt(String.valueOf(digits[i])));
        }
        System.out.println(a * b);
    }
}
