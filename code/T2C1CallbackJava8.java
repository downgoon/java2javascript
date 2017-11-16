public class T2C1CallbackJava8 {

	static void sumCallback(int x, int y, Callback callback) {
		int z = x + y;
		callback.on(z);
	}


	interface Callback {
		void on(int sum);
	}

	public static void main(String[] args) {
		sumCallback(5, 7, sum -> {
			System.out.print("异步风格加和结果：" + sum);
		});
	}

}
