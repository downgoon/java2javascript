public class T2C1Callback {

	static void sumCallback(int x, int y, Callback callback) {
		int z = x + y;
		callback.on(z);
	}

	interface Callback {
		void on(int sum);
	}

	public static void main(String[] args) {
		sumCallback(5, 7, new Callback() {
			@Override
			public void on(int sum) {
				System.out.print("异步风格加和结果：" + sum);
			}
		});
	}

}
