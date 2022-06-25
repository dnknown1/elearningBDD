package lib;

import java.util.Scanner;

public class IO {
	public static Scanner cGet(String prompt){
		cPut_(prompt);
		return new Scanner(System.in);
	}
	public static void put(Object b){System.out.println(b);}
	public static void cPut_(Object b){System.out.print(b);}
}
