import java.util.*;

public class Main {
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] sets = new int[N];

        for (int i = 0; i < N; i++) {
            sets[i] = sc.nextInt();
        }

        Arrays.sort(sets);

        System.out.println(sets[0]);
        System.out.println(sets[sets.length - 1]);
    }
}
