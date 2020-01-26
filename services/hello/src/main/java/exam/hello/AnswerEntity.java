package exam.hello;

import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name="answer")
public class AnswerEntity 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ans_id")
	private int answer_id;
	
	@Column(name="ans_desc")
	private String answer_desc;
	
	@Column(name="ans_create_date")
	private Date ans_create_date;
	
	@Column(name="qstn_id")
	private int question_id;
	
	@Column(name="user_id")
	private int user_sr_id;

	public int getAnswer_id() {
		return answer_id;
	}

	public void setAnswer_id(int answer_id) {
		this.answer_id = answer_id;
	}

	public String getAnswer_desc() {
		return answer_desc;
	}

	public void setAnswer_desc(String answer_desc) {
		this.answer_desc = answer_desc;
	}

	public Date getAns_create_date() {
		return ans_create_date;
	}

	public void setAns_create_date(Date ans_create_date) {
		this.ans_create_date = ans_create_date;
	}

	public int getQuestion_id() {
		return question_id;
	}

	public void setQuestion_id(int question_id) {
		this.question_id = question_id;
	}

	public int getUser_sr_id() {
		return user_sr_id;
	}

	public void setUser_sr_id(int user_sr_id) {
		this.user_sr_id = user_sr_id;
	}

	

	public AnswerEntity(int answer_id, String answer_desc, Date ans_create_date, int question_id, int user_sr_id) {
		this.answer_id = answer_id;
		this.answer_desc = answer_desc;
		this.ans_create_date = ans_create_date;
		this.question_id = question_id;
		this.user_sr_id = user_sr_id;
	}

	public AnswerEntity() {
			// TODO Auto-generated constructor stub
	}

	
	
	
}
