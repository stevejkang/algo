import java.util.*;

public class Main {
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    int count = sc.nextInt();
    String numberSets = sc.next();

    char[] ch = numberSets.toCharArray();
    int result = 0;

    while (count > 0) {
      result += Character.getNumericValue(ch[count - 1]);
      count--;
    }

    System.out.println(result);
  }
}
