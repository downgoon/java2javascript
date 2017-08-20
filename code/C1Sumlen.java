/**
* cd code
* javac C1Sumlen.java
* java C1Sumlen
*/
public class C1Sumlen {

	public static void main(String[] args) {
		int sl = sumlen("hello", "world");
		System.out.println(sl);
	}

	static int sumlen(String x, String y) {
		return x.length() + y.length();
	}
}
