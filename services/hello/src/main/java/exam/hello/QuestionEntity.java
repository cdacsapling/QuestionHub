package exam.hello;

import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name="question")
public class QuestionEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="qstn_id")
	private int question_id;
	
	@Column(name="qstn_desc")
	private String question_desc;
	
	@Column(name="qstn_create_date")
	private Date qstn_create_date;
	
	@Column(name="module_id")
	private int module_id;

	public int getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}

	public String getQuestion_desc() {
		return question_desc;
	}

	public void setQuestion_desc(String question_desc) {
		this.question_desc = question_desc;
	}

	public Date getQstn_create_date() {
		return qstn_create_date;
	}

	public void setQstn_create_date(Date qstn_create_date) {
		this.qstn_create_date = qstn_create_date;
	}

	public int getModule_id() {
		return module_id;
	}

	public void setModule_id(int module_id) {
		this.module_id = module_id;
	}

	public QuestionEntity(int question_id, String question_desc, Date qstn_create_date, int module_id) {
		this.question_id = question_id;
		this.question_desc = question_desc;
		this.qstn_create_date = qstn_create_date;
		this.module_id = module_id;
	}

	public QuestionEntity() {

		// TODO Auto-generated constructor stub
	}

	
	
}
