package exam.hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan("exam.hello")
@EntityScan("exam.hello")
@SpringBootApplication
public class StartSpringBoot {

	public static void main(String[] args) {
		System.out.println("our application is running");
		SpringApplication.run(StartSpringBoot.class, args);
		
	}
                   
}
